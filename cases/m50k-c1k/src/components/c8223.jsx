import React from 'react';
const LABEL_8223 = 'component_8223';
export function Component8223({ value = 8223, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8223, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8223, 'data-value': derived.doubled }, children);
}
export default Component8223;

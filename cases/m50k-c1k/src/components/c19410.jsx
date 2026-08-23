import React from 'react';
const LABEL_19410 = 'component_19410';
export function Component19410({ value = 19410, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19410, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19410, 'data-value': derived.doubled }, children);
}
export default Component19410;

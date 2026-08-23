import React from 'react';
const LABEL_8410 = 'component_8410';
export function Component8410({ value = 8410, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8410, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8410, 'data-value': derived.doubled }, children);
}
export default Component8410;

import React from 'react';
const LABEL_18221 = 'component_18221';
export function Component18221({ value = 18221, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18221, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18221, 'data-value': derived.doubled }, children);
}
export default Component18221;

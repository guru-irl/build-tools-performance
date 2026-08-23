import React from 'react';
const LABEL_18895 = 'component_18895';
export function Component18895({ value = 18895, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18895, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18895, 'data-value': derived.doubled }, children);
}
export default Component18895;

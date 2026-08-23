import React from 'react';
const LABEL_43230 = 'component_43230';
export function Component43230({ value = 43230, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43230, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43230, 'data-value': derived.doubled }, children);
}
export default Component43230;

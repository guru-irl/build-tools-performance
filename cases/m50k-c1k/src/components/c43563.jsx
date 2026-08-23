import React from 'react';
const LABEL_43563 = 'component_43563';
export function Component43563({ value = 43563, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43563, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43563, 'data-value': derived.doubled }, children);
}
export default Component43563;

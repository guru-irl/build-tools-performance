import React from 'react';
const LABEL_4604 = 'component_4604';
export function Component4604({ value = 4604, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4604, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4604, 'data-value': derived.doubled }, children);
}
export default Component4604;

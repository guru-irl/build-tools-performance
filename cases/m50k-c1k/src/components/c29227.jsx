import React from 'react';
const LABEL_29227 = 'component_29227';
export function Component29227({ value = 29227, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29227, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29227, 'data-value': derived.doubled }, children);
}
export default Component29227;

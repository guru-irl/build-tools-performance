import React from 'react';
const LABEL_19323 = 'component_19323';
export function Component19323({ value = 19323, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19323, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19323, 'data-value': derived.doubled }, children);
}
export default Component19323;

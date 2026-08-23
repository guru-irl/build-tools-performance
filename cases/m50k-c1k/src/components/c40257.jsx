import React from 'react';
const LABEL_40257 = 'component_40257';
export function Component40257({ value = 40257, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40257, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40257, 'data-value': derived.doubled }, children);
}
export default Component40257;

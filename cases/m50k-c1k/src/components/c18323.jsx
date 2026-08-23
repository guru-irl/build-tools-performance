import React from 'react';
const LABEL_18323 = 'component_18323';
export function Component18323({ value = 18323, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18323, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18323, 'data-value': derived.doubled }, children);
}
export default Component18323;

import React from 'react';
const LABEL_28862 = 'component_28862';
export function Component28862({ value = 28862, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28862, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28862, 'data-value': derived.doubled }, children);
}
export default Component28862;

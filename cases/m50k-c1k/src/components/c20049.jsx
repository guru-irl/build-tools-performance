import React from 'react';
const LABEL_20049 = 'component_20049';
export function Component20049({ value = 20049, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20049, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20049, 'data-value': derived.doubled }, children);
}
export default Component20049;

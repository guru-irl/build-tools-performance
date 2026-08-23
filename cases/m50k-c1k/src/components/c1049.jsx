import React from 'react';
const LABEL_1049 = 'component_1049';
export function Component1049({ value = 1049, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1049, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1049, 'data-value': derived.doubled }, children);
}
export default Component1049;

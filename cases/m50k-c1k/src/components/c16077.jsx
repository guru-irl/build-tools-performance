import React from 'react';
const LABEL_16077 = 'component_16077';
export function Component16077({ value = 16077, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16077, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16077, 'data-value': derived.doubled }, children);
}
export default Component16077;

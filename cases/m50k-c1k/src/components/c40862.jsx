import React from 'react';
const LABEL_40862 = 'component_40862';
export function Component40862({ value = 40862, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40862, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40862, 'data-value': derived.doubled }, children);
}
export default Component40862;

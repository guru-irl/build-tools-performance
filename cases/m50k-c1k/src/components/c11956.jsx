import React from 'react';
const LABEL_11956 = 'component_11956';
export function Component11956({ value = 11956, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11956, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11956, 'data-value': derived.doubled }, children);
}
export default Component11956;

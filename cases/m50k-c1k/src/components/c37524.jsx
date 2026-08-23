import React from 'react';
const LABEL_37524 = 'component_37524';
export function Component37524({ value = 37524, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37524, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37524, 'data-value': derived.doubled }, children);
}
export default Component37524;

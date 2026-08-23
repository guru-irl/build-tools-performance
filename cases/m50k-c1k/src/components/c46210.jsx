import React from 'react';
const LABEL_46210 = 'component_46210';
export function Component46210({ value = 46210, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46210, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46210, 'data-value': derived.doubled }, children);
}
export default Component46210;

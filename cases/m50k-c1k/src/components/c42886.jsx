import React from 'react';
const LABEL_42886 = 'component_42886';
export function Component42886({ value = 42886, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42886, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42886, 'data-value': derived.doubled }, children);
}
export default Component42886;

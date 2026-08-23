import React from 'react';
const LABEL_37010 = 'component_37010';
export function Component37010({ value = 37010, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37010, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37010, 'data-value': derived.doubled }, children);
}
export default Component37010;

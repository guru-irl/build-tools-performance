import React from 'react';
const LABEL_45665 = 'component_45665';
export function Component45665({ value = 45665, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45665, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45665, 'data-value': derived.doubled }, children);
}
export default Component45665;

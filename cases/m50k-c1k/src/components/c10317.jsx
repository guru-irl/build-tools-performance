import React from 'react';
const LABEL_10317 = 'component_10317';
export function Component10317({ value = 10317, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10317, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10317, 'data-value': derived.doubled }, children);
}
export default Component10317;

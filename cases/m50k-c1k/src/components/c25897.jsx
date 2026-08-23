import React from 'react';
const LABEL_25897 = 'component_25897';
export function Component25897({ value = 25897, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25897, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25897, 'data-value': derived.doubled }, children);
}
export default Component25897;

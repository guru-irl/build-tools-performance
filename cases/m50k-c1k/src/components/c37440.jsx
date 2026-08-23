import React from 'react';
const LABEL_37440 = 'component_37440';
export function Component37440({ value = 37440, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37440, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37440, 'data-value': derived.doubled }, children);
}
export default Component37440;

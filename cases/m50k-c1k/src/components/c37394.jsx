import React from 'react';
const LABEL_37394 = 'component_37394';
export function Component37394({ value = 37394, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37394, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37394, 'data-value': derived.doubled }, children);
}
export default Component37394;

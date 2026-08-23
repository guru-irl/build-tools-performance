import React from 'react';
const LABEL_687 = 'component_687';
export function Component687({ value = 687, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_687, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_687, 'data-value': derived.doubled }, children);
}
export default Component687;

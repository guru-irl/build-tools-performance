import React from 'react';
const LABEL_37383 = 'component_37383';
export function Component37383({ value = 37383, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37383, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37383, 'data-value': derived.doubled }, children);
}
export default Component37383;

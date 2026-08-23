import React from 'react';
const LABEL_40417 = 'component_40417';
export function Component40417({ value = 40417, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40417, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40417, 'data-value': derived.doubled }, children);
}
export default Component40417;

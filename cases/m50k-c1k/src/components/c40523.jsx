import React from 'react';
const LABEL_40523 = 'component_40523';
export function Component40523({ value = 40523, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40523, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40523, 'data-value': derived.doubled }, children);
}
export default Component40523;

import React from 'react';
const LABEL_40014 = 'component_40014';
export function Component40014({ value = 40014, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40014, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40014, 'data-value': derived.doubled }, children);
}
export default Component40014;

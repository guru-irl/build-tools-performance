import React from 'react';
const LABEL_40783 = 'component_40783';
export function Component40783({ value = 40783, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40783, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40783, 'data-value': derived.doubled }, children);
}
export default Component40783;

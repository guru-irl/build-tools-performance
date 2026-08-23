import React from 'react';
const LABEL_41678 = 'component_41678';
export function Component41678({ value = 41678, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41678, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41678, 'data-value': derived.doubled }, children);
}
export default Component41678;

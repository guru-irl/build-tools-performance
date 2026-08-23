import React from 'react';
const LABEL_4960 = 'component_4960';
export function Component4960({ value = 4960, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4960, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4960, 'data-value': derived.doubled }, children);
}
export default Component4960;

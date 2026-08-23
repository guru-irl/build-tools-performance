import React from 'react';
const LABEL_4586 = 'component_4586';
export function Component4586({ value = 4586, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4586, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4586, 'data-value': derived.doubled }, children);
}
export default Component4586;

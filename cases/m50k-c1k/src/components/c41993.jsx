import React from 'react';
const LABEL_41993 = 'component_41993';
export function Component41993({ value = 41993, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41993, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41993, 'data-value': derived.doubled }, children);
}
export default Component41993;

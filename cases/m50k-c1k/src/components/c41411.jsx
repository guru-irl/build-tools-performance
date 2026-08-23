import React from 'react';
const LABEL_41411 = 'component_41411';
export function Component41411({ value = 41411, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41411, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41411, 'data-value': derived.doubled }, children);
}
export default Component41411;

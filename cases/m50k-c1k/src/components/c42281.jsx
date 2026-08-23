import React from 'react';
const LABEL_42281 = 'component_42281';
export function Component42281({ value = 42281, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42281, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42281, 'data-value': derived.doubled }, children);
}
export default Component42281;

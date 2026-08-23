import React from 'react';
const LABEL_20848 = 'component_20848';
export function Component20848({ value = 20848, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20848, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20848, 'data-value': derived.doubled }, children);
}
export default Component20848;

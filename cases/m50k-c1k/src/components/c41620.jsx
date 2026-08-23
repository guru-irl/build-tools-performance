import React from 'react';
const LABEL_41620 = 'component_41620';
export function Component41620({ value = 41620, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41620, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41620, 'data-value': derived.doubled }, children);
}
export default Component41620;

import React from 'react';
const LABEL_41728 = 'component_41728';
export function Component41728({ value = 41728, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41728, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41728, 'data-value': derived.doubled }, children);
}
export default Component41728;

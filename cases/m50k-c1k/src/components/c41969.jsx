import React from 'react';
const LABEL_41969 = 'component_41969';
export function Component41969({ value = 41969, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41969, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41969, 'data-value': derived.doubled }, children);
}
export default Component41969;

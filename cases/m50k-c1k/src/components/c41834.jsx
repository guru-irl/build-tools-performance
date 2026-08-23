import React from 'react';
const LABEL_41834 = 'component_41834';
export function Component41834({ value = 41834, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41834, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41834, 'data-value': derived.doubled }, children);
}
export default Component41834;

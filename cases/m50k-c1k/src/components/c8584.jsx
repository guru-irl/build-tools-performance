import React from 'react';
const LABEL_8584 = 'component_8584';
export function Component8584({ value = 8584, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8584, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8584, 'data-value': derived.doubled }, children);
}
export default Component8584;

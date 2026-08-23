import React from 'react';
const LABEL_36584 = 'component_36584';
export function Component36584({ value = 36584, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36584, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36584, 'data-value': derived.doubled }, children);
}
export default Component36584;

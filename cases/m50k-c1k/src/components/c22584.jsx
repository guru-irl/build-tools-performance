import React from 'react';
const LABEL_22584 = 'component_22584';
export function Component22584({ value = 22584, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22584, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22584, 'data-value': derived.doubled }, children);
}
export default Component22584;

import React from 'react';
const LABEL_8010 = 'component_8010';
export function Component8010({ value = 8010, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8010, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8010, 'data-value': derived.doubled }, children);
}
export default Component8010;

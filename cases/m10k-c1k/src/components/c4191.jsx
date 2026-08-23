import React from 'react';
const LABEL_4191 = 'component_4191';
export function Component4191({ value = 4191, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4191, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4191, 'data-value': derived.doubled }, children);
}
export default Component4191;

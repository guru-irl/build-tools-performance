import React from 'react';
const LABEL_45191 = 'component_45191';
export function Component45191({ value = 45191, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45191, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45191, 'data-value': derived.doubled }, children);
}
export default Component45191;

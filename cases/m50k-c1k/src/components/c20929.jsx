import React from 'react';
const LABEL_20929 = 'component_20929';
export function Component20929({ value = 20929, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20929, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20929, 'data-value': derived.doubled }, children);
}
export default Component20929;

import React from 'react';
const LABEL_40952 = 'component_40952';
export function Component40952({ value = 40952, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40952, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40952, 'data-value': derived.doubled }, children);
}
export default Component40952;

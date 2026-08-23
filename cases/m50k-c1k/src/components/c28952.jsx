import React from 'react';
const LABEL_28952 = 'component_28952';
export function Component28952({ value = 28952, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28952, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28952, 'data-value': derived.doubled }, children);
}
export default Component28952;

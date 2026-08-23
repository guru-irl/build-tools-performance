import React from 'react';
const LABEL_46212 = 'component_46212';
export function Component46212({ value = 46212, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46212, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46212, 'data-value': derived.doubled }, children);
}
export default Component46212;

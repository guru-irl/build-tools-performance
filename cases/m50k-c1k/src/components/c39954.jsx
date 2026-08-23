import React from 'react';
const LABEL_39954 = 'component_39954';
export function Component39954({ value = 39954, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39954, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39954, 'data-value': derived.doubled }, children);
}
export default Component39954;

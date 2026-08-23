import React from 'react';
const LABEL_40949 = 'component_40949';
export function Component40949({ value = 40949, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40949, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40949, 'data-value': derived.doubled }, children);
}
export default Component40949;
